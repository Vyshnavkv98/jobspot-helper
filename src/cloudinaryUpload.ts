import cloudinary ,{UploadApiErrorResponse,UploadApiResponse} from 'cloudinary'

export async function uploads(file:string,public_id?:string,overwrite?:boolean,invalidate?:boolean):Promise<UploadApiErrorResponse | UploadApiResponse | undefined> {
    return new Promise((resolve,reject)=>{
        cloudinary?.v2?.uploader?.upload(file,{public_id,overwrite,invalidate,resource_type:'auto'},
            (error:UploadApiErrorResponse|undefined,result:UploadApiResponse|undefined)=>{
                if (error){
                    resolve(error)
                }
                resolve(result)
            })
     })
}
export async function videoUpload(file:string,public_id?:string,overwrite?:boolean,invalidate?:boolean):Promise<UploadApiErrorResponse | UploadApiResponse | undefined> {
    return new Promise((resolve,reject)=>{
        cloudinary?.v2?.uploader?.upload(file,{public_id,overwrite,invalidate,resource_type:'video',chunk_size:50000},
            (error:UploadApiErrorResponse|undefined,result:UploadApiResponse|undefined)=>{
                if (error){
                    resolve(error)
                }
                resolve(result)
            })
     })
}