import React from 'react';
import Dropzone from 'react-dropzone';

class FileUploader extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            files: [] 
        }
    }
    onDrop(files) {
        this.setState({ files });
    }

    render() {
        

        return (
            <Dropzone maxSixe={1} onDrop={ this.onDrop } accept="image/png" >
                <div>
                    {
                        this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                    }
                </div>
            </Dropzone>
        )
    }
}

export default FileUploader;