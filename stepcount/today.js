let Data2 = [
  {
      "x": "12/18",
      "y": 0
  },
  {
      "x": "01/19",
      "y": 0
  },
  {
      "x": "02/19",
      "y": 0
  },
  {
      "x": "03/19",
      "y": 2
  },
  {
      "x": "04/19",
      "y": 11
  },
  {
      "x": "05/19",
      "y": 119
  },
  {
      "x": "06/19",
      "y": 381
  },
  {
      "x": "07/19",
      "y": 223
  },
  {
      "x": "08/19",
      "y": 265
  },
  {
      "x": "09/19",
      "y": 446
  },
  {
      "x": "10/19",
      "y": 552
  },
  {
      "x": "11/19",
      "y": 101
  },
  {
      "x": "12/19",
      "y": 0
  }
]
const todayData = [
  51, 20, 30, 0, 0, 0, 0, 0,
  293, 352, 1782, 644, 328, 828, 905,
  71, 73, 40, 471, 321, 69, 1660,
  663, 1329
]

const todaySvg = d3.select("svg.daily")

var barScale = d3.scaleLinear()
  .domain([0, 2000])
  .range([1, 112]);

const todayGroups = todaySvg
  .selectAll('g')
  .data(Data2.map(x => x["y"]))
  .enter()
  .append('g')
  .attr("transform", (d,i) => { return "translate(" + (i * 36) + ",0)" })

todayGroups
  .append('rect')
  .attr("x",0)
  .attr('y',0)
  .attr('width', 24)
  .attr('height', 140)
  .attr('class', 'transparent')

todayGroups
  .append("rect")
  .attr("x", 0)
  .attr("y", (d, i) => { return 120 })
  .attr('width', 24)
  .attr('height', 0)
  .transition()
  .duration(250)
  .delay((d,i) => { return i * 20})
  .ease(d3.easeCubicIn)
  .attr("y", (d, i) => { return 120 - barScale(d)} )
  .attr('height', (d,i) => {return barScale(d)})

todayGroups
  .append("text")
  .attr('x', 12)
  .attr("y", 140)
  .attr("class", "days")
  .text((d,i) => { return i })

todayGroups
  .append("text")
  .attr('x', 12)
  .attr('y', (d,i) => { return 110 - barScale(d) })
  .attr("class", "steps")
  .text((d,i) => {return d} )

