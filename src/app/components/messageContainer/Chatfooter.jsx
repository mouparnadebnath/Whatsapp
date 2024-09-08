import React,{useState} from 'react'
import { IconMicrophone, IconMoodSmile, IconPlus,IconSend } from '@tabler/icons-react'
import EmojiPicker from 'emoji-picker-react'
import useMeasure from "react-use-measure";
import {
useDragControls,
useMotionValue,
useAnimate,
motion,
} from "framer-motion";
import { useClickAway } from 'react-use';

const Chatfooter = () => {
    const [emoji, setemoji] = useState(false)
    const [open, setOpen] = useState(false);
    const [text, settext] = useState("")
    const handleEmojiPicker=()=>{
        setemoji(true)
    }

    const handleEmojis=(emoji)=>{
      console.log(emoji)
      let emojis=emoji.emoji
      settext((input)=>input + emojis);
    }
    const handletext=(e)=>{
      e.preventDefault()
      settext(e.target.value)
    }
    const sendMessage=()=>{
      setOpen(false)
    }
  return (
    <>
    <>

      <DragCloseDrawer open={open} setOpen={setOpen}>
        <EmojiPicker theme='dark'  height={390}  open={open} className='-z-10' skinTonesDisabled={true} onEmojiClick={handleEmojis}/>
      </DragCloseDrawer>
    </>

    <div className='lg-h-[8.5%] md:h-[8.5%] sm:h[5%] bg-[#202c33] flex flex-row items-center justify-around z-10 '>
<span data-icon="smiley" className='cursor-pointer' onClick={() => setOpen(true)}><svg  viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="x23j0i4 xd7y6wv" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>smiley</title><path fill="white" d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679 S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551 c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959 c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217 s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354 c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z  M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"></path></svg></span>
<IconPlus/>
<input type="text" placeholder='Type a message' onChange={handletext} value={text} className='w-[80%] bg-[#2a3942] h-[70%] rounded-md focus:outline-none p-4 placeholder:text-sm'/>
<IconSend onClick={sendMessage} className='cursor-pointer  hover:h-[1.8rem] hover:w-[1.8rem] m-1 '/>
<IconMicrophone/>
    </div>
    </>
  )
}

const DragCloseDrawer = ({ open, setOpen, children }) => {
    const [scope, animate] = useAnimate();
    const [drawerRef, { height }] = useMeasure();
  
    const y = useMotionValue(0);
    const controls = useDragControls();
  
    const handleClose = async () => {
      animate(scope.current, {
        opacity: [1, 0],
      });
  
      const yStart = typeof y.get() === "number" ? y.get() : 0;
  
      await animate("#drawer", {
        y: [yStart, height],
      });
  
      setOpen(false);
    };
  
    return (
      <>
        {open && (
          <motion.div
            ref={scope}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={handleClose}
            className="z-10 bg-transparent"
          >
            <motion.div
              id="drawer"
              ref={drawerRef}
              onClick={(e) => e.stopPropagation()}
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{
                ease: "easeInOut",
              }}
              className="absolute bottom-0  overflow-hidden  bg-transparent"
              style={{ y }}
              drag="y"
              dragControls={controls}
              onDragEnd={() => {
                if (y.get() >= 100) {
                  handleClose();
                }
              }}
              dragListener={false}
              dragConstraints={{
                top: 0,
                bottom: 0,
              }}
              dragElastic={{
                top: 0,
                bottom: 0.5,
              }}
            >
              <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-transparent">
                <button
                  onPointerDown={(e) => {
                    controls.start(e);
                  }}
                  className="h-2 w-14 cursor-grab touch-none rounded-full bg-transparent active:cursor-grabbing"
                ></button>
              </div>
              <div className="relative z-0 h-full overflow-y-scroll">
                {children}
              </div>
            </motion.div>
          </motion.div>
        )}
      </>
    );
}
export default Chatfooter