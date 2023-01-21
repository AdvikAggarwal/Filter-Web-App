noseX = 0;
noseY = 0;
fil = "0";
function preload()
{  lipstick_filter = loadImage("https://i.postimg.cc/3RhLVSKQ/Lipstick.png");
   moustache_filter = loadImage("https://i.postimg.cc/k45JQykq/Moustache.png");
}

function setup()
{
  canvas = createCanvas(500, 370);
  canvas.position(470, 394);
  video = createCapture(VIDEO);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses)
}

function draw()
{
 image(video, 0, 0, 500, 375);
 if (fil == "moustache")
 {
 image(moustache_filter, noseX, noseY, 80, 55);
 }
 else if (fil == "lipstick")
 {
 image(lipstick_filter, noseX, noseY, 70, 30);
 }
}
function take_Snapshot()
{
    document.getElementById("file").value = "";
    filtered = document.getElementById("file").value;
    file_name = filtered + ".jpeg";
    console.log(file_name);
    save(file_name);
}
function modelLoaded()
{
  console.log("Posenet is initialised.");
}
function gotPoses(results)
{
  console.log(results);
  if (fil == "moustache")
  {
    noseX = results[0].pose.nose.x -115;
    noseY = results[0].pose.nose.y - 90;
  }
  else if (fil == "lipstick")
  {
    noseX = results[0].pose.nose.x -115;
    noseY = results[0].pose.nose.y - 65;
  }
  console.log('noseX=' + noseX);
  console.log('noseY=' + noseY);
}
function moustache()
{
    fil = "moustache";
}
function lipstick()
{
    fil = "lipstick";
}