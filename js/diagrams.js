var rdfGraph = d3.select('#RDFGraph').append('svg');

rdfGraph.attr('height', '100%').attr('width', '50%').attr('pointer-events','auto').attr('style','border: 1px solid black');

rdfGraph.append('svg:ellipse').attr('cx','5').attr('cy','5').attr('rx','50').attr('ry','25').attr('fill','#ff0000');
