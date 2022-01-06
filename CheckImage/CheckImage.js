/**
   Check Image

   (c) 2022 by Christian Liska
*/
#feature-id Devgroup > CheckImage

#define TITLE "Check Image by CL"
#define VERSION "1.0.1"
#define ID "CHKIMG"

//#define EXTRACT_VIEWS
#define DELETE_VIEWS

#include <pjsr/ColorSpace.jsh>
#include <pjsr/SampleType.jsh>

#include "PI_Lib.jsh"

function main() {
   generateCrop();
}

main();
