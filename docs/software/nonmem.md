# NONMEM
* NLME models

## Installation in macOS
* the material is based on readme_751_MACOSX.txt file from [NONMEM webpage](https://nonmem.iconplc.com/#/nonmem751)
* It worked with my MacBook (M3) with macOS Sonoma 14.5

### Command Line Tools
* Install newest Command Line Tools in Mac OS 
```sh
# uninstall older versions
sudo rm -rf /Library/Developer/CommandLineTools
# install new version
xcode-select --install
```
### gfortran
* Install gfortran using homebrew
```sh
# install homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# add `/opt/homebrew/bin` (or your homebrew path) to your PATH
## for .zsh. (if you use bash, `nano ~/.bash_profile`)
nano ~/.zshrc
## add this in the file, save changes and exit `⌃ + O, ⌃ + X`.
export PATH="/opt/homebrew/bin:$PATH"
## apply the changes. (if you use bash, `source ~/.bash_profile`)
source ~/.zshrc
## verify changes (homebrew path should be in listed paths)
echo $PATH

# install gcc
brew install gcc

# Add symbolic link to gcc
## use if it is not there
mkdir -p ~/bin
## version number might change
ln -sf /opt/homebrew/bin/gcc-14 ~/bin/gcc

# check versions 
##to ensure that it won't use the "clang" C compiler
export PATH=/usr/local/bin:/usr/local/gfortran/bin:$PATH
##gcc and GNU Fortran versions should match
gcc --version
gfortran --version
```

* Compiler Test for Fortran


```sh
# Create the `Compiler/test` Directory
mkdir -p ~/Compiler/test
cd ~/Compiler/test

# Create the Fortran Source File
## create and open file
nano hello.f90
## add this in the file, save changes and exit `⌃ + O, ⌃ + X`.
program hello
    print *, 'Hello, NONMEM World!'
end program hello

# Create the Makefile
## create and open file
nano Makefile
## add this in the file, save changes and exit `⌃ + O, ⌃ + X`.
FC = gfortran
FFLAGS = -O2
TARGET = hello

all: $(TARGET)

$(TARGET): $(TARGET).o
	$(FC) $(FFLAGS) -o $(TARGET) $(TARGET).o

$(TARGET).o: $(TARGET).f90
	$(FC) $(FFLAGS) -c $(TARGET).f90

clean:
	rm -f $(TARGET) $(TARGET).o

# Run the Make Commands
make clean
make
./hello
## Uutput: `Hello, NONMEM`

# remove created folder
rm -rf ~/Compiler
```

### Install NONMEM

* download installation files from [NONMEM webpage](https://nonmem.iconplc.com/#/nonmem751)

```sh
# Unzip zip file in terminal (you'll need password from ICON).
unzip Downloads/NONMEM751.zip
cd Downloads/nm751CD  

# Remove extra attributes
xattr -rc nm751CD 

# install nonmem
sudo /bin/bash SETUP75 ~/Downloads/nonmem751/nm751CD /opt/NONMEM/nm751 gfortran y ar same rec i

# executes the NONMEM script
cd /opt/NONMEM/nm751/run
./nmfe75 CONTROL5 REPORT5.txt -prdefault
ls -l prsame.set

# add symbolic links and aliases
ln -sf /opt/NONMEM/nm751/run/nmfe75 ~/bin/nmfe75
ln -sf /opt/NONMEM/nm751/run/nmfe75 ~/bin/nmfe                
ln -sf /opt/NONMEM/nm751/help/nmhelp ~/bin/nmhelp
alias nmhelp_web='open /opt/NONMEM/nm751/html/index.htm'
```

### Update licence file
* it should be located in `/opt/NONMEM/nm751/license/nonmem.lic`

---