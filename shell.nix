{ pkgs, nimpkgs, buildInputs }:

pkgs.mkShell {
  shellHook = ''
  '';
  buildInputs = with pkgs; buildInputs ++ [
    mozjpeg
  ];
}
