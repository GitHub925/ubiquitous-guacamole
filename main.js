function preload(){
    stache=loadImage("https://i.postimg.cc/TYkwbLFz/stache.png")
    }
    nosyx=0;
    nosyy=0;
    mouthx=0;
    mouthy=0;
    function setup(){
        canvas=createCanvas(600,500);
        video=createCapture(VIDEO);
        video.size(600,500);
        video.hide();
        posenet=ml5.poseNet(video, modelLoaded);
        posenet.on("pose", gotPoses);
    }
    
    function draw(){
        image(video, 0,0,600,500);
        fill('black')
        rect(mouthx, mouthy, 100, 20)
        fill('crimson')
        ellipse(nosyx, nosyy, 60, 60);
    }
    
    function takePic(){
     save("goomaboomakooma.png");
    }
    
    function modelLoaded(){
        console.log("Poog initialized!")
    }
    
    function gotPoses(results){
        if(results.length>0){
            console.log(results);
            nosyx=results[0].pose.nose.x;
            nosyy=results[0].pose.nose.y;
            console.log(nosyx);
            console.log(nosyy);
            mouthx=nosyx-50;
            mouthy=nosyy+20
            console.log(mouthx);
            console.log(mouthy);
        }
    }