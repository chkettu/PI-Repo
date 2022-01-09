/**
   Check Image / extract 5x5 views

   (c) 2022 by Christian Liska
*/
#feature-id Devgroup > Extract5x5Views

#define TITLE "Check Image and extract 5x5 views by CL"
#define VERSION "1.0.0"
#define ID "5x5view"

#define EXTRACT_VIEWS
#define DELETE_VIEWS

#include <pjsr/ColorSpace.jsh>
#include <pjsr/SampleType.jsh>
#include "PI_Lib.jsh"

function main() {
   generateMatrix();
}

main();
