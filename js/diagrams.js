var rdfGraph = d3.select('#RDFGraph').append('svg');

rdfGraph.attr('height', '100%').attr('width', '50%').attr('pointer-events','auto');

rdfGraph.append('svg:rect').attr('width','50px').attr('height','100px').attr('fill','#ff0000');
