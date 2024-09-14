# WCRL Website

## Table of Contents
- [Overview](#overview)
- [Updating the Website](#updating-the-website)
    - [Setting up a Fork](#setting-up-a-fork)
    - [Setup Test Environment (Optional)](#setup-test-environment)
    - [Add New Documentation](#add-new-documentation)
    - [Update the Teams Page](#update-about-us-page)

## Overview 
This site is created using jekyll, a static site generator. Jekyll makes it really to add content to the website, even for people with no knowledge on website development!

The site uses Github actions to build and deploy the site onto github pages after any changes are pushed onto the main branch. The Github actions script is located [.github\workflows\main.yml](.github\workflows\main.yml).

If you plan on reworking the website, please refer to the [jekyll-docs](https://jekyllrb.com/docs/) to answer any questions about the inner workings of the site. If you really need help figuring something out, you can contact 
srijal@binghamton.edu.

## Updating the Website

### Setting up a Fork
Only the [WCRL github account](https://github.com/wcrl) can directly make changes to this repository. This means that if you want to add on to the website, you must first create a **fork**. 

The fork is essentially a clone of the website that is owned by you. Unlike the original website, you can edit your fork directly. Once you are done making the desired changes in your fork, you can then request to update the original repository via a **pull request**. A board member will review this request and if they approve the changes, the original website will be updated to reflect them.

Instructions on creating a fork can be found [here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#forking-a-repository).

Instructions on submitting a pull request can be found [here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork).


### Setup Test Environment
Setting up a local development environment is optional, but highly recommended if you want to view how your changes will affect the website in real time.

The first step to setting up a test environment is making sure you have [git](https://git-scm.com/downloads) installed.

Once you have verified that you have git on your machine, the next step is to [clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository?platform=windows&tool=webui) your fork:
```
git clone [link-to-your-fork]
```

Once your fork is cloned, you must install [jekyll](https://jekyllrb.com/docs/installation/) onto your machine.

Once jekyll is installed, you can install the required dependencies by running:
```bash
bundle install
```

Now your development environment is set up! From now on, all you have to do to run the project is use the command:
```bash
bundle exec jekyll serve
```

Once you run that command, you should be able to view the test website at http://localhost:4000.

### Add New Documentation


#### File Structure
All documentation should be placed into the `_documentation` folder. The folder should adhere to the following format:
```
\_documentation
    getting-started.md
    \electronics
        arduino.md
    \printing
        printing-guide.md
    ...
```
All documentation filenames should be in lowercase and words should be seperated with dashes. 

Additionally, ensure that each file is placed in the correct subfolder according to its group. You can find a list of existing groups in the [sidebar.yml](_data\sidebar.yml) file.

To add a new category, update the sidebar.yml file using the following format:
```yml
groups:
  <subfolder-name>: "<title>"
```
**NOTE:** Replace the fields inside `< >` with the appropriate folder name and title.

If you add a new group, just make sure to add a subfolder to `_documentation` to reflect the changes!

#### File Format
The beginning of every file in the `_documentation` folder must contain the following heading:
```yml
---
title: <title>
layout: documentation
group: '<group-name>'
---
```
**NOTE:** If there is no group associated with that file, you may leave empty quotes `''`.

### Update About Us Page
The about us page is automatically generated using data from a google form via a python script. For now the process of running the script has to be manually done, but in the future we are looking to automate this process.

To generate the about us page, first make sure you have [python](https://www.python.org/downloads/) installed.

The next step is to [export](https://golayer.io/blog/google-sheets/export-google-sheets-to-csv/) the google sheets file of the form data into `.csv` format. Rename this file into `team.csv` and put it into the `scripts/` folder. The google sheets file can be found in the `Website Development/` folder of the WCRL Shared Drive.

Once that is complete, you must download all the team pictures from the WCRL Shared Drive (`Website Development/team/`) and then put them into `/assets/img/team/` folder.

Now you may run the generation script by using the command:
```bash
python generate-team.py
```

**NOTE:** Make sure you are inside the `scripts/` folder before running this command!

## Credits

Thanks to Dean Attali for his free Beautiful Jekyll theme which alot of this website's design stems from! You can find a link to his theme [here](https://github.com/daattali/beautiful-jekyll#plans)! 
