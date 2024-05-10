# Portfolio

Das Portfolio ist mit React, Vite und Remark erstellt. Wird auf die `main`-Branch gepusht, wird das Portfolio mit GitHub Actions ein production build erstellt, der dann auf in das TomSoerr.github.io Repository gepusht wird. Dort wird die Seite dann gehostet.

## Installation

```bash
npm install
```

## Projekt hinzufügen

1. Bild erstellen in [Figma](https://www.figma.com/file/7NxuFtozQUqdAZ7BxEgbc1/Portfolio?type=design&node-id=204%3A262&mode=design&t=BhsoOBRPjh1G3TUz-1) (1454 x 847)
2. Text schreiben in Markdown
3. Bild in `public/thumbnails` hochladen
4. Markdown in `src/projekte` hochladen
5. In `src/content.js` den Projektnamen hinzufügen

> [!CAUTION]
> Das Bild muss ein png sein und den selben Namen wie das Markdown-Dokument haben.
