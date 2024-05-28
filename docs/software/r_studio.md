# R and R studio
## ggplot2 
* [[ref]](https://r-graphics.org/chapter-ggplot2) 
* [[ref]](../articles/2016_Wickham.pdf)

## Xpose4 
* [[ref]](../articles/2013_Keizer.pdf)

## VPC 
* [[ref]](../articles/2015_Keizer.pdf)

## Personal use
### Packages

### Functions
#### leave()

* Remove all objects except:
    * functions
    * objects that contain specified string within their name
* I just find it easier than writing every object in `rm()`

 ```R
 leave <- function(exclude_strings) {
  # Get all objects in the global environment
  all_objects <- ls(envir = .GlobalEnv)
  
  # Identify functions and objects containing specified strings in their names
  functions <- all_objects[sapply(all_objects, function(x) is.function(get(x)))]
  exclude_objects <- all_objects[sapply(all_objects, function(x) any(sapply(exclude_strings, function(s) grepl(s, x))))]
  
  # Remove all objects except functions and objects containing specified strings in their names
  objects_to_remove <- setdiff(all_objects, c(functions, exclude_objects))
  rm(list = objects_to_remove, envir = .GlobalEnv)
}
 ```

#### plotsave()

* save all objects that are named as `str`+`i` (e.g. plot1, plot_1 or p1) in `path` (path specified folder)
    * the folder will be created if it doesn't exist

 ```R
plotsave <- function(path, str) {
  for (i in 1:30) {
    tryCatch({
      plot_object <- get(paste0(str, i))
    if (!is.null(plot_object)) {
      plot_name <- paste0(path, "plot", i, ".png")
      ggsave(plot_name, plot = plot_object, width = 6, height = 4.5, units = "in", dpi = 300, create.dir = TRUE)
    }}, error = function(e) {})
  }
}
 ```

#### theme_custom()

* Custom [ggplot2](#ggplot2) theme that can be re-used 
    * if there are additional changes it can be added in `...`

```R
theme_custom <- function(...) {
  theme_bw()+
  theme(
          legend.text  = element_text(size = 6),
          axis.text.x  = element_text(size = 6, angle = 0, vjust = 0, hjust=0.5),
          axis.text.y  = element_text(size = 6),
          plot.caption = element_text(size = 6, hjust = 0),
          legend.title = element_text(size = 8, face="bold"),
          axis.title.y = element_text(size = 8, face="bold"),
          axis.title.x = element_text(size = 8, face="bold"),
          strip.text.x = element_text(size = 8, face="bold"),
          title = element_text(size = 10, face="bold")
        ) +
    theme(...)
}
```

---