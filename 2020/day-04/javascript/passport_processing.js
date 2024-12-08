const validatePassports = (input, validator) =>
  parsePassports(input).filter(validator).length;

const parsePassports = (input) => {
  let passports = [''];
  for (let line of input) {
    line === ''
      ? passports.push('')
      : (passports[passports.length - 1] += line);
  }
  return passports;
};

const hasRequiredFields = (passport) =>
  !['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'].find(
    (field) => !passport.includes(field)
  );

const allFieldsAreValid = (passport) => {
  if (!hasRequiredFields(passport)) return false;
  const fields = passport.split(' ');
  for (let field of fields) {
    const [key, value] = field.split(':');
    if (!fieldsValidator[key](value)) return false;
  }
  return true;
};

const fieldsValidator = {
  byr: (year) => +year >= 1920 && +year <= 2002,
  iyr: (year) => +year >= 2010 && +year <= 2020,
  eyr: (year) => +year >= 2020 && +year <= 2030,
  hgt: (height) => {
    const [, value, units] = height.match(/(\d+)(cm|in)?/);
    return (
      (units === 'cm' && value >= 150 && value <= 193) ||
      (units === 'in' && value >= 59 && value <= 76)
    );
  },
  hcl: (color) => /#[0-9a-f]{6}/.test(color),
  ecl: (color) => /(amb|blu|brn|gry|grn|hzl|oth)/.test(color),
  pid: (id) => /^\d{9}$/.test(id),
  cid: () => true,
};

export { validatePassports, hasRequiredFields, allFieldsAreValid };
