export default function Stage31(){
  return (
    <div>
      Pathfinding algorithms based on simple ideas: search around with minimal efforts until reaching the destiny. 
      <br></br>
      A* stands out to be a “smart” one: it played the guessing game like a human. 
      <br></br>
      This gives the algorithms some time advantages. 
      <br></br>
      It calculates the value for each step by two components (f(x) = g(x) + h(x)): 
      <br></br>
      the g(x) stands for the actual effort required to get to x-position. 
      <br></br>The h(x) stands for the estimation efforts required to go from x to the destination.

    </div>
  )
}