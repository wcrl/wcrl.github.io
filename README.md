# WCRL Website Development

--- WORK IN PROGRESS ---

Development of the WCRL Website

## Instructions for Use
...

### Documentation
All documentation should be placed into the `_documentation` folder. The folder should
follow the following format:
```
\_documentation
    getting-started.md
    \electronics
        arduino.md
    \printing
        printing-guide.md
    ...
```
All documentation filenames should be in lowercase and words should be seperated with dashes. Also, make sure to organize the folders by their categories.

The header for all documentation files should have the following format:
```yml
title: /* title name */
layout: documentation
group: /* the name of the subfolder */
```

**Note:** If you want the doc file to be included in a dropdown menu, make sure to specify a value for the `group` attribute (if you dont want it in a subfolder, put empty quotes `""`). The value should be the name of the subfolder the doc file is in. If you create a new subfolder, make sure to include it in the `_data/nav.yml` file! It should follow this format:
```yml
documentation:
    foldername: "Folder Title"    
```


## Credits

Thanks to Dean Attali for his free Beautiful Jekyll theme which alot of this website's design stems from! You can find a link to his theme [here](https://github.com/daattali/beautiful-jekyll#plans)!