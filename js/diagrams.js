var rdfGraph = d3.select('#RDFGraph').append('svg');

rdfGraph.attr('height', '100%').attr('width', '50%').attr('pointer-events','auto');

rdfGraph.append('svg:rect').attr('width','50px').attr('height','100px').attr('fill','#ff0000');
rdfGraph.append('svg:rect').attr('x','50').attr('y','50').attr('width','50px').attr('height','100px').attr('fill','#ffff00');
rdfGraph.append('svg:rect').attr('x','50').attr('y','150').attr('width','50px').attr('height','100px').attr('fill','#ff00FF');
