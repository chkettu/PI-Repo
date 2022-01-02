#feature-id    CheckImage : Utilities > CheckImage

#define TITLE "Check Image"
#define VERSION "1.0.0"

#include <pjsr/ColorSpace.jsh>
#include <pjsr/SampleType.jsh>


function main() {
   var width;
   var height;

   var window = ImageWindow.activeWindow;
   var view = window.currentView;
   var img = view.image;
   //if ( window.isNull ) throw new Error( "No active image" );

   let z = img.zoomFactor;
   width = img.width / 5;
   height = img.height / 5;
   console.writeln(z);
   console.writeln(width);
   console.writeln(height);

   window.createPreview(0,0,width,height,"L1");
   window.createPreview(width*2,0,width*2+width,height,"L2");
   window.createPreview(width*4,0,width*4+width,height,"L3");

   window.createPreview(0,height*2,width,height*2+height,"L4");
   window.createPreview(width*2,height*2,width*2+width,height*2+height,"L5");
   window.createPreview(width*4,height*2,width*4+width,height*2+height,"L6");

   window.createPreview(0,height*4,width,height*4+height,"L7");
   window.createPreview(width*2,height*4,width*2+width,height*4+height,"L8");
   window.createPreview(width*4,height*4,width*4+width,height*4+height,"L9");

   var pv = new ImageWindow(width*3, height*3,
      img.numberOfChannels,
      img.bitsPerSample,
      img.sampleType != SampleType_Integer,
      img.colorSpace != ColorSpace_Gray,
      "CHECK_IMAGE");

   var mv = pv.mainView;
   mv.beginProcess();

   let v1 = window.previewById("L1");
   let i1 = v1.image;

   mv.image.selectedPoint = new Point(0,0);
   mv.image.apply(i1);
   window.deletePreview(v1);

   let v2 = window.previewById("L2");
   let i2 = v2.image;

   mv.image.selectedPoint = new Point(width,0);
   mv.image.apply(i2);
   window.deletePreview(v2);

   let v3 = window.previewById("L3");
   let i3 = v3.image;

   mv.image.selectedPoint = new Point(width*2,0);
   mv.image.apply(i3);
   window.deletePreview(v3);

   let v4 = window.previewById("L4");
   let i4 = v4.image;

   mv.image.selectedPoint = new Point(0,height);
   mv.image.apply(i4);
   window.deletePreview(v4);

   let v5 = window.previewById("L5");
   let i5 = v5.image;

   mv.image.selectedPoint = new Point(width,height);
   mv.image.apply(i5);
   window.deletePreview(v5);

   let v6 = window.previewById("L6");
   let i6 = v6.image;

   mv.image.selectedPoint = new Point(width*2,height);
   mv.image.apply(i6);
   window.deletePreview(v6);

   let v7 = window.previewById("L7");
   let i7 = v7.image;

   mv.image.selectedPoint = new Point(0,height*2);
   mv.image.apply(i7);
   window.deletePreview(v7);

   let v8 = window.previewById("L8");
   let i8 = v8.image;

   mv.image.selectedPoint = new Point(width,height*2);
   mv.image.apply(i8);
   window.deletePreview(v8);

   let v9 = window.previewById("L9");
   let i9 = v9.image;

   mv.image.selectedPoint = new Point(width*2,height*2);
   mv.image.apply(i9);
   window.deletePreview(v9);

   mv.endProcess();

   pv.show();

}

main();
