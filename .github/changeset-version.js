// ORIGINALLY FROM SHADCN UI:
// https://github.com/shadcn-ui/ui/blob/main/.github/changeset-version.js

import { exec } from "child_process"
exec("npx changeset version")
exec("npm install")