let monthData = [
  8429, 10345, 13505, 10222, 11102, 5721, 8091,
  18081, 9123, 3724, 11401, 12230, 8534, 16034,
  8429, 10345, 13505, 10222, 11102, 6721, 8091,
  18081, 9123, 9724, 27401, 12230, 6534, 16034,
]

let monthData2 = [
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

const radiusScale = d3.scaleSqrt()
  .domain([0, 30000])
  .range([0, 50])

const monthSvg = d3.select("svg.monthly")

const monthGroups = monthSvg
  .selectAll('g')
  .data(monthData)
  .enter()
  .append('g')
  .attr('transform', (d, i) => { 
    const x = (i % 7) * 125 + 60
    const y = Math.floor(i / 7) * 150 + 60
    // return 'translate(' + x + ',' + y + ')'
    return `translate(${x},${y})`
  })

monthGroups
  .append('circle')
  .attr('cx',0)
  .attr('cy',0)
  .attr('r', radiusScale(10000))
  .attr('class', 'ring')

monthGroups
  .append('circle')
  .attr('cx',0)
  .attr('cy',0)
  .attr('r', radiusScale(20000))
  .attr('class', 'ring')

monthGroups
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 10)
  .attr('class', 'actual')
  .transition()
  .duration(250)
  .delay((d,i) => { return i * 20 + 200})
  .ease(d3.easeCubicIn)
  .attr("r", (d,i) => { return radiusScale(d) })

monthGroups
  .append("text")
  .attr("class", 'day')
  .attr("x", 0)
  .attr("y", 65)
  .text((d,i) => {return i + 1})

monthGroups
  .append("text")
  .attr("class", 'steps')
  .attr("x", 0)
  .attr("y", 65)
  .text((d,i) => {return d})
