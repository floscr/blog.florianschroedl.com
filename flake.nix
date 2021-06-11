{
  inputs.nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
  inputs.flake-utils.url = "github:numtide/flake-utils";

  outputs = { self, nixpkgs, nimble, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let pkgs = nixpkgs.legacyPackages.${system};
          nimpkgs = nimble.packages.${system};
          buildInputs = with pkgs; [
          ];
      in rec {
        packages.blog = pkgs.stdenv.mkDerivation {
          name = "blog";
          src = ./.;

          nativeBuildInputs = with pkgs; [
          ];

          buildInputs = buildInputs;

          buildPhase = with pkgs; ''
          '';
          installPhase = ''
          '';
        };

        devShell = import ./shell.nix {
          inherit pkgs;
          inherit buildInputs;
        };

        defaultPackage = packages.blog;

      });
}
