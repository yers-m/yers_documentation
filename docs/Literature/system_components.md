# System Components
## Cortisol
* major glucocorticoid
*  Chemical properties
      * $C_{21}H_{30}O_5$
      * Average mass: 362.460 Da or g/mol [[ChemsSpider]](https://www.chemspider.com/Chemical-Structure.5551.html)
      * IUPAC name: 11β,17α,21-Trihydroxypregn-4-ene-3,20-dione
      * Molecule Type: Small molecule

![Chemical Structure of Cortisol](./screenshots/cortisol_chembl.png)

*Chemical Structure of Cortisol. Figure from [ChEMBL](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL389621/).*

![Cortisol structure created in Python by the py3Dmol tool](./figures/py3Dmol_cortisol.png)

*Chemical structure of Cortisol. Created using py3Dmol tool.*

<center><div style="height: 450px; width: 85%; position: relative;" class='viewer_3Dmoljs' data-cid='5754' data-backgroundcolor='0xffffff' data-style='stick:colorscheme=cyanCarbon'></div></center>

*Interactive chemical structure of Cortisol. Created using 3Dmol.js tool.*

* a negative feedback on CRH and ACTH release, thereby inhibiting the HPA axis [[2002_Tsigos]](https://doi.org/10.1016/s0022-3999(02)00429-4)
* saturable plasma protein binding of cortisol occurring at high cortisol concentrations [[1981_Toothaker]](https://doi.org/10.1007/bf01062332)
* maturation factors
    + amount of body water
        - 80-85% in young infants
        - 55-60% in adults
    + fat content
        - 10-15% at birth
    + maturation of plasma proteins
    + ↓$[CBG]$ in neonates = ↑ $CL_u$ [[1975_Hadjian]](https://doi.org/10.1203/00006450-197501000-00008)

---

## <kbd>**CBG**</kbd>
* **Corticosteroid-Binding Globulin**
* low conc. relative to albumin
    + albumin: 35,000-50,000 mg/L [[1992_Peters]](https://books.google.com.sg/books?hl=en&lr=&id=i1DC3KlTAB8C&oi=fnd&pg=PP2&dq=T.+Peters+Jr.+All+about+Albumin:+Biochemistry,+Genetics,+and+Medical+Applications.+Academic+Press,+Oxford,+UK+(1996).&ots=WZBgiT1oad&sig=t6YtiXhHhbZKB0gaotMGeXZDHmo#v=onepage&q&f=false)
    + CBG: 14.9-67.1 mg/L [[2003_Lewis]](https://doi.org/10.1016/s0009-8981(02)00417-5)
        - elevated: 
            - pregnant women (2-3 fold) [[2011_Henley]](https://doi.org/10.1016/j.neuroscience.2011.02.053)
            - synthetic oral oestrogens [[1967_Musa]](https://doi.org/10.1210/jcem-27-10-1463)
            - Mitotane, an adrenolytic agent for adrenocortical carcinoma [[1991_Vanseters]](https://doi.org/10.1530/acta.0.1240526)
            - some patients with chronic active hepatitis
        - reduced: 
            - neonates (note: infants reach adult values) [[1975_Hadjian]](https://doi.org/10.1203/00006450-197501000-00008)
            - patients with Cushing's syndrome (33.2 ± 5.6 mg/L) [[1986_Coolens]](https://doi.org/10.1016/0022-4731(87)90071-9)

* Saturation of CBG
    + at total cortisol concentrations ($C_{tot}$) above 200 ng/mL or 550 nmol/L [[1981_Toothaker]](https://doi.org/10.1007/bf01062332)
    + unbound cortisol concentration ($C_{u}$) increases disproportionally with respect to $C_{tot}$
* lower in neonates, whereas infants had reached adult values
* 3D structure [[2007_Klieber]](https://doi.org/10.1074/jbc.m705014200)

![CBG Structure created by py3Dmol tool](./figures/py3Dmol_CBG.png)


*Chemical structure of CBG. Created using py3Dmol tool.*

<center><div style="height: 450px; width: 85%; position: relative;" class='viewer_3Dmoljs' data-pdb='2V95' data-backgroundcolor='0xffffff'
        data-style='stick:colorscheme=cyanCarbon'></div></center>

<center><div style="height: 450px; width: 85%; position: relative;" class='viewer_3Dmoljs' data-pdb='2V95' data-backgroundcolor='0xffffff'
        data-style='cartoon:color=spectrum' data-surface='opacity:.5'></div></center>

*Interactive chemical structure of CBG. Created using 3Dmol.js tool.*

---


## <kbd>**17-OHP**</kbd>
* **17-hydroxyprogesterone** or **17-OH-Progesterone**
* used as biomarker of CAH
* seems to have a circadian variation (>12 months) [[2003_Groschl]](https://doi.org/10.1373/49.10.1688)
* conc. range of 12-36 nmol/L -> target for therapy [[2005_Merke]](https://doi.org/10.1016/s0140-6736(05)66736-0)
    + note: when measured in the early morning before medication

![17-OHP Structure created by py3Dmol tool](./figures/py3Dmol_17-OHP.png)

*Chemical structure of 17-OHP. Created using py3Dmol tool.*

<center><div style="height: 450px; width: 85%; position: relative;" class='viewer_3Dmoljs' data-cid='6238' data-backgroundcolor='0xffffff' data-style='stick:colorscheme=cyanCarbon'></div></center>

*Interactive chemical structure of 17-OHP. Created using 3Dmol.js tool.*

---

## <kbd>**ACTH**</kbd>
* **AdrenoCorticoTrophic Hormone**
* [[link]](https://pubchem.ncbi.nlm.nih.gov/compound/Corticotropin)
* Increased production in CAH 
    * due to 
        * feedback loop from decreased cortisol production
        * aldosterone insufficiency -> volume depletion -> vasopressin synthesis [[2000_Arvat]](https://doi.org/10.1530/eje.0.1430099)
    * leads to [[2020_Merke]](https://doi.org/10.1056/nejmra1909786)
        * adrenocortical hyperplasia as well as the 
        * synthesis of adrenal androgens and androgen precursors, 
        * synthesis of 17-OHP and androstenedione
---

## <kbd>**HPA-axis**</kbd>
* **Hypothalamic-Pituitary-Axis**
* follow a **circadian rhythm**
* Cortisol is inhibits the HPA axis
    * major glucocorticoid and 
    * negative feedback on CRH and ACTH release
* Classic CAH
    * absence of negative feedback
    * increased production of corticotropin-releasing factor (CRF) in hypothalamus
    * increased production of adrenocorticotrophic hormone (ACTH) in pituitary gland
    * main reason for overproduction of androgens


---

## Steroid synthesis
* Steroid synthesis of mineralocorticoids, glucocorticoids and androgens
* healthy and CAH

![Pathway in a Healthy Individual](./screenshots/pathway_healthy.png)
![Pathway in an Individual with CAH](./screenshots/pathway_CAH.png)

*Steroid synthesis pathway. Figures were adopted from [PhD thesis of Johanna Melin](https://refubium.fu-berlin.de/handle/fub188/23620).*

---

<script src="https://3Dmol.org/build/3Dmol-min.js"></script>     
<script src="https://3Dmol.org/build/3Dmol.ui-min.js"></script>  

---