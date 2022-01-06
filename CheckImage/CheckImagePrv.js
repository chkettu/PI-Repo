/**
   Check Image

   (c) 2022 by Christian Liska
*/
#feature-id Devgroup > CheckImagePreviews

#define TITLE "Check Image with previews by CL"
#define VERSION "1.0.0"
#define ID "CHKPRV"

//#define EXTRACT_VIEWS
//#define DELETE_VIEWS

#include <pjsr/ColorSpace.jsh>
#include <pjsr/SampleType.jsh>

#include "PI_Lib.jsh"

function main() {
   generateCrop();
}

main();
