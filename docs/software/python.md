# Python code

## py3Dmol

* To visualize molecular structures in 3D.
* Interactive: Real-time manipulation (rotate, zoom).
* Customizable: Various styles (stick, sphere, cartoon) and colors.
* Ease of Use: Simple API for Python users.
* Ideal for Jupyter Notebooks.
* Open Source.


```python
#cortisol
import py3Dmol

view = py3Dmol.view(query='cid:5754')

view.setStyle({'stick': {'color':'spectrum'}})
view.zoomTo()

# Save the visualization as an HTML file
view.render("visualization.html")
```


<script src="https://3Dmol.org/build/3Dmol-min.js"></script>     
<script src="https://3Dmol.org/build/3Dmol.ui-min.js"></script>     
 
<div style="height: 400px; width: 400px; position: relative;" class='viewer_3Dmoljs' data-pdb='2POR' data-backgroundcolor='0xffffff' data-style='stick' data-ui='true'></div>
