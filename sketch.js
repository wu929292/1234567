function setup() {
  createCanvas(windowWidth, windowHeight);
  function draw() {
    background(220);
    textSize(40)
    text("X:"+mouseX+" Y:"+mouseY,50,50)
  push()
     translate(width/2,height/2)
     fill('#2894FF')
     ellipse(0,0,400)//臉
     fill(255)
     ellipse(0,100,300,200)//白色部分
     fill(255)
     ellipse(-40,-30,70,90)//左眼白
     ellipse(40,30,70,90)//右眼白
     fill(0)
     ellipse(-40+map(mouseX,0,width,-50,50),-40+map(mouseX,0,height,-50,50),20)//左眼球
     ellipse(40+map(mouseX,0,width,-50,50),-40+map(mouseY,0,height,50,50),20)//右眼球
     fill(255,0,0)
     ellipse(0,0,50,50)//鼻子
     
     fill(255,0,0)
     arc(0,100,200,100,0,180)  //下弧
     fill(255)
     pop()
}
  }