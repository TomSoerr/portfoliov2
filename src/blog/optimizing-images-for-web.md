# convert png to jpg
```bash
convert rose.jpg -resize 50% rose.png
```

# optimize all images
```shell
mkdir -p optimized_images && for X in *.jpg; do convert "$X" -resize "700000@>" -strip -quality 70 "optimized_images/$X"; done
```

