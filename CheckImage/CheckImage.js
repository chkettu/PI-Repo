/**
   Check Image
   
   (c) 2022 by Christian Liska
*/
#feature-id    CheckImage : Devgroup > CheckImage

#define TITLE "Check Image by CL"
#define VERSION "1.0.0"
#define ID "CHKIMG"

#include <pjsr/ColorSpace.jsh>
#include <pjsr/SampleType.jsh>


function main() {
   var width;
   var height;

   var window = ImageWindow.activeWindow;
   if ( window.isNull ) throw new Error( "No active image" );

   var view = window.currentView;
   var img = view.image;

   let z = img.zoomFactor;
   width = img.width / 5;
   height = img.height / 5;
   console.writeln(z);
   console.writeln(width);
   console.writeln(height);

   var pv = new ImageWindow(width*3, height*3,
      img.numberOfChannels,
      img.bitsPerSample,
      img.sampleType != SampleType_Integer,
      img.colorSpace != ColorSpace_Gray,
      "CHECK_IMAGE");

   var mv = pv.mainView;
   mv.beginProcess();

   let v1 = window.createPreview(0,0,width,height,"L1");
   let i1 = v1.image;

   mv.image.selectedPoint = new Point(0,0);
   mv.image.apply(i1);
   window.deletePreview(v1);

   let v2 = window.createPreview(width*2,0,width*2+width,height,"L2");
   let i2 = v2.image;

   mv.image.selectedPoint = new Point(width,0);
   mv.image.apply(i2);
   window.deletePreview(v2);

   let v3 = window.createPreview(width*4,0,width*4+width,height,"L3");
   let i3 = v3.image;

   mv.image.selectedPoint = new Point(width*2,0);
   mv.image.apply(i3);
   window.deletePreview(v3);

   let v4 = window.createPreview(0,height*2,width,height*2+height,"L4");
   let i4 = v4.image;

   mv.image.selectedPoint = new Point(0,height);
   mv.image.apply(i4);
   window.deletePreview(v4);

   let v5 = window.createPreview(width*2,height*2,width*2+width,height*2+height,"L5");
   let i5 = v5.image;

   mv.image.selectedPoint = new Point(width,height);
   mv.image.apply(i5);
   window.deletePreview(v5);

   let v6 = window.createPreview(width*4,height*2,width*4+width,height*2+height,"L6");
   let i6 = v6.image;

   mv.image.selectedPoint = new Point(width*2,height);
   mv.image.apply(i6);
   window.deletePreview(v6);

   let v7 = window.createPreview(0,height*4,width,height*4+height,"L7");
   let i7 = v7.image;

   mv.image.selectedPoint = new Point(0,height*2);
   mv.image.apply(i7);
   window.deletePreview(v7);

   let v8 = window.createPreview(width*2,height*4,width*2+width,height*4+height,"L8");
   let i8 = v8.image;

   mv.image.selectedPoint = new Point(width,height*2);
   mv.image.apply(i8);
   window.deletePreview(v8);

   let v9 = window.createPreview(width*4,height*4,width*4+width,height*4+height,"L9");
   let i9 = v9.image;

   mv.image.selectedPoint = new Point(width*2,height*2);
   mv.image.apply(i9);
   window.deletePreview(v9);

   mv.endProcess();

   pv.show();

}

main();
