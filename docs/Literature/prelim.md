# Preliminary research

## JMe_1
* Published information from [2018_Melin](https://doi.org/10.1007/s40262-017-0575-8)

### Population Pharmacokinetic Analysis
* NONMEM 7.3 and Perl speaks NONMEM (PsN 4.4.0)
* LLOQ data were disregarded as it was 4% of $C_u$ data

#### Binding model and CBG model
* first-order conditional estimation with interaction
* using log transformed $C_{tot}$ data
    * which had corrresponding $C_u$ data
* Binding model:
$$C_b = \frac{B_{max} \cdot C_u}{K_d + C_u} + NS \cdot C_u $$
> $C_b$ - bound cortisol concentration
> $B_{max}$ - maximal binding capacity
> $K_d$ - equilibrium dissociation constant
> $NS$ - linear nonspecific binding 

* CBG model:
    * constant CBG after DEX administration
    * CBG was used as a covariate for $B_{max}$

#### Semi-mechanistic pharmacokinetic model
* Stochastic Approximation Expectation Maximisation method with interaction followed by Monte-Carlo Importance Sampling Expectation Maximisation method
* using log transformed $C_{tot}$ data
* $C_{tot}$ before and after treatment were similar
    * constant cortisol baseline (Baselinecort) was estimated
* Equation for $C_{tot}$
$$C_{tot} = \frac{A_c}{V_c} + baseline_{cort}$$
> $C_{tot}$ - predicted total cortisol concentration in the central compartment
> $A_c$ - total amount in central compartment
> $V_c$ - central volume of distribution
> $baseline_{cort}$ - individual cortisol baseline

* Time course of $A_{depot}$
$$\frac{dA_{depot}}{dt} = \frac{-V_{max} \cdot A_{depot}}{K_m + A_{depot}}$$
> $A_{u}$ unbound amount in the central compartment
> $V_c$ peripheral compartment
> $Q$ intercompartmental clearance
> $CL$ elimination constant 
* binding model was included
    * with fixed parameters
* IIV
    * exponential model, assuming a log-normal distribution of structural pharmacokinetic parameters
    * fixed CV of 15% for fixed parameters
* RUV
    * generally: additive error on the log scale
    * CBG model: proportional error model on linear scale

#### Model Evaluation
* goodness-of-fit plots
* parameter plausibility  
* parameter precision
    * parameteric bootstraps in PsN (n = 1000)
* Predictive performance
    * visual predictive checks (VPCs)
* objective function value (OFV).
    * nested models: likelihood ratio test 
    * unnested models: AIC
* binding model evaluation
    * using VPC with plasma protein binding data from [[1999_Lentjes]](https://doi.org/10.1210/jcem.84.2.5461)

#### Simulations
* simulated in R 3.3.0
* different concentrations of cortisol 
    * using the developed binding model and 
    * the typical CBG baseline
    * $C_{tot}$ range was explored: 23.7-492 nmol/L
* dose–exposure relationship 
    * using semi-mechanistic pharmacokinetic model
    * different BW (5–100 kg) and the typical CBG concentration
    * $C_{max}$ and AUC
        * 2.2–18.5 years
        * was analysed and compared to literature data [[1997_Knutsson]](https://doi.org/10.1210/jcem.82.2.3769)
    * $C_{max}$
        * 25th–75th percentiles of the Cmax for the morning peak in children
    * AUC comparison range 
        * 95% confidence interval
        * one-third of the 24 h AUC for children, 
        * assuming a recommended 3 times/day with equal doses


<!-- stopped at Results -->

---

## VSt
* 

---

## DBi
*

---