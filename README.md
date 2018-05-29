# Allo Desktop

Requires a local installation of [Electron](https://electronjs.org/).

```
% git clone https://github.com/carymrobbins/allo-desktop
% cd allo-desktop
% electron .
```

For convenience, you can package this up as a bash script for it to be launched
however you prefer to launch programs.

```bash
% cat > ~/bin/allo-desktop
#!/bin/bash

cd path/to/allo-desktop
electron .

<press ctrl+d>

% chmod +x ~/bin/allo-desktop
% allo-desktop &
```
