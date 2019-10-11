# Random-geojson-csv 
 Will generate CSV File with random latitude and longitude used as a reference for Geojson
```
$ node ./renderPoint.js 100 

#Will produce output file of point_randomizer.csv as below 

latitude,longitude,altitude,geometry,name,details,summary
50.91385385,-131.12899500,0,Point,focused_jackson,Proident ...,tone develop sit finger become term pay ...
82.90206531,67.74325603,0,Point,compassionate_germain,Sint dolore ....,your president ...

```

Once Generated we can upload it to HERE XYZ Spaces for Visualizing it on map
```
 $here configure set 
 > login to HERE SSO

 $here xyz upload -f ./point_randomizer.csv -o -s
 # this will upload the file and create an XYZ Space for visualization
```