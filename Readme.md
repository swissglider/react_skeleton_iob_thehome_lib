# This is the Swissglider React Skeleton iob TheHome Addon.
This Component extends the Swissglider React Skeleton Framework with a Metadata Component that shows the metadata as a tree. The Metadata are called from the theHome Generator Adapter on iob with the sendTo command getMetaData
  
[Storybook](http://swissglider.github.io/react_skeleton_iob_thehome_lib)


-----

The following libs has to be installed
- "@hookstate/core": "^3.0.13",
- "@iobroker/adapter-react": "^2.0.22",
- "@swissglider/react_skeleton_framework": "^0.0.39",
- "grommet": "^2.22.0",
- "react": "^17.0.2",
- "react-dom": "^17.0.2",
- "axios": "^0.26.1",
- "styled-components": "^5.3.5"

-----

in the main index you also need to import the following:
```
import 'jqwidgets-scripts/jqwidgets/styles/jqx.base.css';
import 'jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css';
```

-----

This Library is done with the help of:  
https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe  
https://medium.com/swlh/how-to-deploy-storybook-to-github-pages-4894097d49ab