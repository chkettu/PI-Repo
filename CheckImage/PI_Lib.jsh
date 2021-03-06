function generateMatrix() {
   var width;
   var height;

   var window = ImageWindow.activeWindow;
   if ( window.isNull ) throw new Error( "No active image" );

   var view = window.currentView;
   var img = view.image;

   var viewArray = new Array(25);

   width = img.width/5;
   height = img.height/5;

   /*
      v[i,j]
      v(0,0), v(0,1), ... , v(0,4)
      v(1,0), v(1,1), ... , v(1,4)
      ...
      v(4,0), v(4,1), ... , v(4,4)
    */
   for(var i = 0; i < 5; i++) {
      for (var j = 0; j < 5; j++) {
         let v = window.createPreview(width * j, height * i, width + width *j, height + height * i, "v" + i + j);
         viewArray[i*5+j] = v;
      }
   }

   for (var j = 0; j < viewArray.length; ++j) {
      var vj = viewArray[j];
      statistics(vj);
#ifdef EXTRACT_VIEWS
      var imgj = vj.image;
      var iwj = new ImageWindow(imgj.width, imgj.height,
         imgj.numberOfChannels,
         imgj.bitsPerSample,
         imgj.sampleType != SampleType_Integer,
         imgj.colorSpace != ColorSpace_Gray,
         "C_"+(j+1));
      var iwjv = iwj.mainView;
      iwjv.beginProcess();
      iwjv.image.apply(imgj);
      iwjv.endProcess();
      iwj.show();
#endif
#ifdef DELETE_VIEWS
      window.deletePreview(vj);
#endif
   }
}

function generateCrop() {
   var width;
   var height;

   var window = ImageWindow.activeWindow;
   if ( window.isNull ) throw new Error( "No active image" );

   var view = window.currentView;
   var img = view.image;

   var viewArray = new Array(9);

   width = img.width / 5;
   height = img.height / 5;

   var pv = new ImageWindow(width*3, height*3,
      img.numberOfChannels,
      img.bitsPerSample,
      img.sampleType != SampleType_Integer,
      img.colorSpace != ColorSpace_Gray,
      "CHECK_IMAGE");

   var mv = pv.mainView;
   mv.beginProcess();

   let v1 = window.createPreview(0,0,width,height,"_1");
   mv.image.selectedPoint = new Point(0,0);
   mv.image.apply(v1.image);
   viewArray[0] = v1;

   let v2 = window.createPreview(width*2,0,width*2+width,height,"_2");
   mv.image.selectedPoint = new Point(width,0);
   mv.image.apply(v2.image);
   viewArray[1] = v2;

   let v3 = window.createPreview(width*4,0,width*4+width,height,"_3");
   mv.image.selectedPoint = new Point(width*2,0);
   mv.image.apply(v3.image);
   viewArray[2] = v3;

   let v4 = window.createPreview(0,height*2,width,height*2+height,"_4");
   mv.image.selectedPoint = new Point(0,height);
   mv.image.apply(v4.image);
   viewArray[3] = v4;

   let v5 = window.createPreview(width*2,height*2,width*2+width,height*2+height,"_5");
   mv.image.selectedPoint = new Point(width,height);
   mv.image.apply(v5.image);
   viewArray[4] = v5;

   let v6 = window.createPreview(width*4,height*2,width*4+width,height*2+height,"_6");
   mv.image.selectedPoint = new Point(width*2,height);
   mv.image.apply(v6.image);
   viewArray[5] = v6;

   let v7 = window.createPreview(0,height*4,width,height*4+height,"_7");
   mv.image.selectedPoint = new Point(0,height*2);
   mv.image.apply(v7.image);
   viewArray[6] = v7;

   let v8 = window.createPreview(width*2,height*4,width*2+width,height*4+height,"_8");
   mv.image.selectedPoint = new Point(width,height*2);
   mv.image.apply(v8.image);
   viewArray[7] = v8;

   let v9 = window.createPreview(width*4,height*4,width*4+width,height*4+height,"_9");
   mv.image.selectedPoint = new Point(width*2,height*2);
   mv.image.apply(v9.image);
   viewArray[8] = v9;

   mv.endProcess();

   pv.show();

   for (var j = 0; j < viewArray.length; ++j) {
      var vj = viewArray[j];
      statistics(vj);
#ifdef EXTRACT_VIEWS
      var imgj = vj.image;
      var iwj = new ImageWindow(imgj.width, imgj.height,
         imgj.numberOfChannels,
         imgj.bitsPerSample,
         imgj.sampleType != SampleType_Integer,
         imgj.colorSpace != ColorSpace_Gray,
         "C_"+(j+1));
      var iwjv = iwj.mainView;
      iwjv.beginProcess();
      iwjv.image.apply(imgj);
      iwjv.endProcess();
      iwj.show();
#endif
#ifdef DELETE_VIEWS
      window.deletePreview(vj);
#endif
   }

}

function statistics(view) {
    let iv = view.image;
    let mean = iv["mean"]().toString().slice(0,6);
    let stdDev = iv["stdDev"]().toString().slice(0,6);
    let avgDev = iv["avgDev"]().toString().slice(0,6);
    console.writeln("" + view.id + ": mean=" + mean + " stdDev=" + stdDev + " avgDev=" + avgDev);
}

