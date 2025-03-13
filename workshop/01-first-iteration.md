# First Iteration

1. Create a new project

   ```sh
   npm create astro@latest
   cd redistribute-me
   npm install
   ```

2. Run:

   ```sh
   npm run dev
   ```

   Then open [localhost:4321](http://localhost:4321/) in your browser.

3. Create a new git repository and commit your project

   ```sh
   git init
   git add .
   git commit -m "chore: initial commit"
   ```

4. Add a licence:

   ```sh
   curl --output LICENSE "https://interoperable-europe.ec.europa.eu/sites/default/files/custom-page/attachment/2020-03/EUPL-1.2%20EN.txt"
   git add LICENSE
   git commit -m "chore: add EUPL-1.2 licence"
   ```

5. Add `.editorconfig`:

   ```sh
   curl --output .editorconfig "https://raw.githubusercontent.com/redte-ch/maisonquiroga.art/refs/heads/main/.editorconfig"
   git add .editorconfig
   git commit -m "chore: add .editorconfig"
   ```
