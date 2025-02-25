import { FileUpload } from '@skeletonlabs/skeleton-react'
import { ImagePlus as IconDropzone, Paperclip as IconFile, XCircle as IconRemove } from 'lucide-react';
import './App.css'

function App() {

    return (
        <main>
            <div>
                <label className='label'>
                    <span className='label-text'>Input</span>
                    <input className='input' type="text" placeholder='input' />
                </label>
                <button type="button" className="btn preset-filled-primary-500">Button</button>
                <FileUpload
                    name="example"
                    accept="image/*"
                    maxFiles={2}
                    subtext="Attach up to 2 files."
                    iconInterface={<IconDropzone className="size-8" />}
                    iconFile={<IconFile className="size-4" />}
                    iconFileRemove={<IconRemove className="size-4" />}
                    onFileChange={console.log}
                    onFileReject={console.error}
                    classes="w-full"
                />
            </div>
        </main>
    )
}

export default App
