import React from "react";
import ContentLoader from "react-content-loader";

const LoaderInfo = (props) => (<>
    <h4 style={{textAlign: "center"}}>Choose a character...</h4>
    <ContentLoader 
        speed={2}
        width={375}
        height={454}
        viewBox="0 0 375 454"
        backgroundColor="#e0e0e0"
        foregroundColor="#cbc9c9"
        {...props}
    >
        <rect x="37" y="36" rx="0" ry="0" width="116" height="117" /> 
        <rect x="177" y="38" rx="0" ry="0" width="131" height="19" /> 
        <rect x="181" y="122" rx="0" ry="0" width="116" height="28" /> 
        <rect x="181" y="87" rx="0" ry="0" width="116" height="28" /> 
        <rect x="45" y="200" rx="0" ry="0" width="310" height="12" /> 
        <rect x="46" y="219" rx="0" ry="0" width="276" height="11" /> 
        <rect x="47" y="255" rx="0" ry="0" width="77" height="19" /> 
        <rect x="47" y="282" rx="0" ry="0" width="317" height="26" /> 
        <rect x="47" y="314" rx="0" ry="0" width="317" height="26" /> 
        <rect x="47" y="346" rx="0" ry="0" width="317" height="26" />
    </ContentLoader>
  </>
)

export default LoaderInfo;

