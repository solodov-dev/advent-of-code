import System.Environment

main = do
  contents <- getContents
  lns <- lines contents
  wrds <- take 2 $ map words lns
