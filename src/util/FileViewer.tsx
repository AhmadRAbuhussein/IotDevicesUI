import {Document, Page} from 'react-pdf';
import {Box} from "@mui/material";
import ImageViewer from "components/imageViewer";

const FileViewer=({imgUrl,viewImageDisable}:{imgUrl:string,viewImageDisable?:boolean})=>{
    const openInNewTab = (url:string) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };
    const splitString = imgUrl.split(".").at(-1);
    return (
        <Box>
            {["mp3"].includes(splitString ?? "") && <Box onClick={() => openInNewTab(imgUrl)}
                                                             style={{ display: 'flex',
                                                                 paddingTop: '2rem',
                                                                 justifyContent: 'center',
                                                                 height: '100%',
                                                                 alignItems: 'center',
                                                                 paddingLeft: '0.75rem',
                                                                 marginTop: '0.5rem',}}>
                <Box
                    className={"mx-1 font-bold"} style={{  margin: '0.25rem',
                    fontWeight: 'bold',}}>{splitString ?? "" .toUpperCase()}</Box>
            </Box>}

            {["pdf"].includes(splitString ?? "") && <Box onClick={() => openInNewTab(imgUrl)}
                                                         style={{ display: 'flex',
                                                             justifyContent: 'center',
                                                             height: '100%',
                                                             alignItems: 'center',}}
                                                             >
                <Document
                    file={imgUrl}
                    className={"max-h-[200px]"}

                >
                    <Page height={400} onError={(e) => console.log(e)} pageNumber={1} scale={.5}
                          renderAnnotationLayer={false}  renderTextLayer={false}
                         />
                </Document>
            </Box>}

            { ["png", "jpeg", "jpg"].some(v => imgUrl.includes(v)) &&

                <ImageViewer
                    viewImageDisable={viewImageDisable}
                    imgUrl={imgUrl}/>}
        </Box>
    )


}
export default FileViewer
