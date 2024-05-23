# Model Selection and Evaluation
## Numerical and statistical evaluation 
### Objective Function Value - <kbd>**OFV**</kbd>
* minimising the -2LL
* lower OFV indicates a better fit
* likelihood ratio test [[2014_Owen]](https://doi.org/10.1038%2Fpsp.2014.51)
  * for nested models (complex models which can be collapsed to the simpler one)
  * $χ^2$ distribution
  * null hypothesis: no difference between models
  * hypothesis: difference between models
  * significance level (α) of 0.01: 
    * OFV of 6.63 (degrees of freedom=1 or an increase of 1 parameter)
    * OFV of 9.21 (degrees of freedom=2 or an increase of 2 parameters)
    * etc.

| Degrees of Freedom | 0.05   | 0.01   | 0.001  |
|--------------------|--------|--------|--------|
| 1                  | 3.841  | 6.635  | 10.828 |
| 2                  | 5.991  | 9.210  | 13.816 |
| 3                  | 7.815  | 11.345 | 16.266 |
| 4                  | 9.488  | 13.277 | 18.467 |
| 5                  | 11.070 | 15.086 | 20.515 |
| 6                  | 12.592 | 16.812 | 22.458 |
| 7                  | 14.067 | 18.475 | 24.322 |
| 8                  | 15.507 | 20.090 | 26.125 |
| 9                  | 16.919 | 21.666 | 27.877 |
| 10                 | 18.307 | 23.209 | 29.588 |


### Akaike Information Criterion - <kbd>**AIC**</kbd>
* [[2006_Bonate]](https://doi.org/10.1007/b138744)
  * not nested 
  * lower AIC indicates the better fit 

$$AIC=OFV+2 \cdot p$$

### Bayesian Information Criterion - <kbd>**BIC**</kbd>

## Graphical evaluation
* Standard **GOF** (goodness of fit) 
* comparison of the predicted versus the observed concentrations
* observations should be scattered evenly around the line of identity
* **CWRES** (conditional weighted residuals)
  * adjusted based on the FOCE approximation [[2007_Hooker]](https://doi.org/10.1007/s11095-007-9361-x)
  * should be [[2013_Mould]](https://doi.org/10.1038/psp.2013.14)
    * close to zero (± 2 SD)
    * randomly scattered around zero
* CWRES vs. population predictions
  * identification of concentration-dependencies
  * to assess appropriateness of the RUV model
* CWRES vs. time
  * identification of time-dependencies
  * specification appears in the absorption or the elimination phase.
* **VPC** (visual predictive checks)
* simulation-based graphical evaluation
* to evaluate predictive performance of a model
* the ability of a model to reproduce the observed data
* procedure [[2011_Bergstrand]](https://doi.org/10.1208%2Fs12248-011-9255-z)
  * The percentiles of interest (commonly 5th,50th and 95th)
  * the confidence interval of respective percentiles for the simulated concentrations
  * compared graphically with the same percentiles of the observed concentrations
  * derived for selected time ranges (bins) 
  * not at every time to ease the comparison
* percentiles of the simulated and observed data are compared graphically [[2008_Holford]](https://www.page-meeting.org/?abstract=1434)
* Categorical VPC is a useful tool to evaluate performance for categorical data [[2009_Bergstrand]](https://doi.org/10.1208/s12248-009-9112-5)

## Evaluation of uncertainty in parameter estimates
* variance-covariance matrix 
  * generated in NONMEM
  * standard errors of the parameter estimates 
    *  the square root of the diagonal elements in variance-covariance matrix
* **%RSE** relative standard error
  * to evaluate parameter precision for fixed-effects
  * <30% are acceptable [[2014_Owen]](https://doi.org/10.1038%2Fpsp.2014.51)

$$RSE(\theta) = 100 \cdot \frac{SE(\theta)}{\theta}$$

> $θ$ the final population parameter; <br>
> $SE(θ)$ standard error of the population parameter.
> 
* **%RSE** <u>for random-effects parameters</u>
  * 40-50% is acceptable [[2014_Owen]](https://doi.org/10.1038%2Fpsp.2014.51)

$$RSE(\omega^2) = 100 \cdot \frac{SE(\omega^2)}{2 \cdot \omega^2}$$

> $\omega^2$ final variance; <br>
> $SE(\omega^2)$ standard error of final variance.

* Bootstrap method [[2005_Lindbom]](https://doi.org/10.1016/j.cmpb.2005.04.005)
  * generated from the original dataset
  * sampling individuals with replacement
  * new parameter estimates are generated 
  * derived confidence interval (e.g. 95% CI)
  * $>200$ datasets may be needed to generate the standard errors
  * can be generated using PsN software

* Log-Likelihood profiling
  * to assess if the OFV from the final model refers to the global minimum
  * surface of the likelihood between the full and reduced model
    * re-estimation by fixing the respective parameter to a slightly different estimate (e.g. ±5% or ±20%) 
    * until the selected significant difference in likelihood (e.g. ΔOFV: 3.84, df=1, α=0.05) is achieved
    * the lower and upper boarder of the 95% confidence interval for the parameter has been reached [[2014_Owen]](https://doi.org/10.1038%2Fpsp.2014.51) [[2018_PsN_LLP]](https://uupharmacometrics.github.io/PsN/docs.html)

## Identification of Influential Individuals
* may have a large impact on 
  * model selection
  * parameter estimates
* Comparison of individual OFV in the NONMEM output
* Case-deletion diagnostics
  * new datasets where one individual has been removed
  * influential individual if
    * a relative change in parameter estimates of ±20% [[2011_Bonate]](https://doi.org/10.1007/b138744)

## Simulations
* Deterministic
  * do not consider the random-effects parameters of the model
  * generating the typical concentration-time profile for a given set of covariates
  * useful to visualise and assess which impact changes in dose will have on e.g. exposure
* Stochastic
  * consider the random-effects parameters
  * used when generating VPCs
  * require appropriate precision of all parameters
  * to guide dose selection 
  * to compare different dosing scenarios

---
