import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Artist, ArtistDocument } from 'src/artist-model/artist-model';
import { Model } from 'mongoose';
@Injectable()
export class ArtistService {
    constructor(@InjectModel(Artist.name) private readonly model: Model<ArtistDocument>) {}
    
    async findAllArtist(){
        return await this.model.find().exec();
    }
}
