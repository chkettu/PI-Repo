/**
   Check Image

   (c) 2022 by Christian Liska
*/
#feature-id Devgroup > Extract3x3CropViews

#define TITLE "Check Image and extract 3x3 crop viewsby CL"
#define VERSION "1.0.0"
#define ID "3x3CRP"

#define EXTRACT_VIEWS
#define DELETE_VIEWS

#include <pjsr/ColorSpace.jsh>
#include <pjsr/SampleType.jsh>


/**
   Check Image

   (c) 2022 by Christian Liska
*/
#feature-id Devgroup > Extract3x3Crop

#define TITLE "Check Image with previews by CL"
#define VERSION "1.0.0"
#define ID "CHKPRV"

#define EXTRACT_VIEWS
#define DELETE_VIEWS

#include <pjsr/ColorSpace.jsh>
#include <pjsr/SampleType.jsh>

#include "PI_Lib.jsh"

function main() {
   generateCrop();
}

main();
