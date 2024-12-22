from io import StringIO

def create_xmas_tree(height, ornament):
  buffer = StringIO()
  for i in range(1,height+1):
    buffer.write(f"{'_'*(height-i)}{ornament*(2*n-i)}{'_'*(height-i)}\n")
  
  buffer.write(f"{'_'*(height-1)}#{'_'*(height-1)}\n")
  buffer.write(f"{'_'*(height-1)}#{'_'*(height-1)}")

  return buffer.getValue().strip