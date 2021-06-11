{ pkgs, buildInputs }:

pkgs.mkShell {
  shellHook = ''
  '';
  buildInputs = with pkgs; buildInputs ++ [
    nodejs
    (pkgs.yarn.override { inherit nodejs; })

    # Dependencies for mozjpeg
    autoreconfHook  # Inject nixpkgs for mozjpeg build
    automake autoconf libtool dpkg pkgconfig nasm libpng
  ];
}
