# <kbd>**PsN**</kbd>
* **Perl speaks NONMEM**
* [[ref]](../articles/2005_Lindbom.pdf)
* tool to ease the model development
* bootstrap 
* Case-deletion diagnostics
* log-likelihood profiling

## Installation in MacBook
* the material is based on documentation from [PsN webpage](https://uupharmacometrics.github.io/PsN/install.html)
* It worked with my MacBook (M3) with macOS Sonoma 14.5
* You'll need:
    * working NONMEM 

### Check for required software
```sh

# Homebrew 
## Display Homebrew prefix path
brew --prefix
brew list --versions
## Add Homebrew binary directory to PATH
export PATH=/opt/homebrew/bin:$PATH 
export HOMEBREW_PREFIX=/opt/homebrew
## Open the .zshrc file for editing
nano ~/.zshrc 
        ## add this in the file, save changes and exit `⌃ + O, ⌃ + X`.
        export PATH="/opt/homebrew/bin:$PATH"
## Apply the changes made to .zshrc
source ~/.zshrc  

# Perl 
## Install using Homebrew
brew install perl
## Link Perl to make it accessible system-wide
brew link perl
## Check Perl version
perl -v
## Verify the location of Perl executable
which perl

# Python
## Check version
python --version
python3 --version

# R 
## Check version
R --version

# Java
## Check version
java -version
## Install if needed 

# Pandoc
## Install Pandoc using Homebrew
brew install pandoc
## Check Pandoc version
pandoc --version
```

### System dependencies
*  for plotting and reporting

```sh
# Install system dependencies for plotting and reporting using Homebrew
brew install openssl@1.1
brew install cairo
brew install mariadb-connector-c
```

### Perl modules
```sh
# Install Perl modules using CPAN
cpan -f Math::Random
cpan Math::MatrixReal
cpan Mouse
cpan MouseX::Params::Validate
cpan Archive::Zip
cpan YAML
cpan Capture::Tiny
cpan File::Copy::Recursive
cpan File::HomeDir
cpan Math::SigFigs
cpan Statistics::Distributions
```

### Install PsN 5.3.1 
* installltion files can be found in [[PsN documentation]](https://uupharmacometrics.github.io/PsN/download.html)
* [PsN 5.3.1.tar.gz](https://github.com/UUPharmacometrics/PsN/releases/download/v5.3.1/PsN-5.3.1.tar.gz) file for macOS

```sh
# Run the setup script for PsN in PsN-Source folder
sudo perl setup.pl

# Configuration file
## Find the location of psn.conf configuration file 
## in my case it was in `/Library/Perl/5.34/PsN_5_3_1`
sudo find / -name "psn.conf" 2>/dev/null 
## Verify the content of  PsN configuration file
        [nm_versions]
        default=/opt/NONMEM/nm751,7.5
        nm751=/opt/NONMEM/nm751,7.5
        nonmem_nm751=/opt/nonmem/nm751,7.5
## Display help information for PsN
psn -help
```

### Extra 
* Lines of code that helped to run PsN commands

```sh
# Change ownership of Homebrew directory to the current user
sudo chown -R {YOUR USERNAME} /opt/homebrew
# Update Homebrew to the latest version
brew update
# Upgrade all outdated Homebrew packages
brew upgrade
# Clean up old versions of installed packages
brew cleanup
# Reinstall GCC to ensure it's up-to-date
brew reinstall gcc
# List GCC installation details
brew list gcc
# Check if the libgfortran library is present
ls /opt/homebrew/opt/gcc/lib/gcc/current/libgfortran.5.dylib
# Set DYLD_LIBRARY_PATH to include the GCC library path
DYLD_LIBRARY_PATH=/opt/homebrew/opt/gcc/lib/gcc/current:$DYLD_LIBRARY_PATH
# Apply the updated environment variables
source ~/.zshrc 
```

---