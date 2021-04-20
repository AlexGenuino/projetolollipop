import React, {useState} from 'react';
import { Container, PlaylistName, ButtonFollow,ContentPlaylist, ContentMenu,Content,StyleTittle, PlayListMusicas, Music, ButtonAddMusic, ButtonsNextMusic} from './styles';
import Menu from '../../components/Menu'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import { BiMusic, BiHeart, BiShow } from "react-icons/bi";
import { AiTwotoneDelete } from "react-icons/ai";
import Player from '../../components/Player'
import MockPlaylist from '../../services/server/playLists'
import playlist from '../../services/server/playLists';
import { BsFillPlayFill, BsFillSkipEndFill, BsFillSkipStartFill, BsPause} from "react-icons/bs";
import Logo from '../../components/icons/ImagePlayMusic';

const PlayerSong = () => {
    const [musiccurrent, setMusic] = useState(0)
    const [currentSong, setSong] = useState(MockPlaylist.musics[musiccurrent])

    const [playList, setPlaylist] = useState(MockPlaylist);

    const handlerMusicChange = () =>{
        setSong(MockPlaylist.musics[musiccurrent])
    }

    const NextMusic = () => {
        setMusic(musiccurrent + 1)
        handlerMusicChange()
        console.log(musiccurrent)
    }

    const BackMusic = () => {
        setMusic(musiccurrent - 1)
        handlerMusicChange()
        console.log(musiccurrent)
    }

    return (
    <Container>
        <ContentMenu>
                <Menu>Olá Alex</Menu>
            </ContentMenu>
        <PlaylistName>
            <StyleTittle>
                <Logo/>
                <h1>{playList.titulo}</h1>
            </StyleTittle>
        </PlaylistName>
        <ContentPlaylist>
            <Player videoCompleto={currentSong.idVideo}>
            </Player>
            <Content>
                    <div style={{width:'80%', marginTop:'1rem'}}>
                    <InputGroup size="sm" className="mb-1">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm"><BiMusic/></InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Encontre sua música" />
                    </InputGroup>
                    </div>
                    <div style={{width:'80%', marginTop:'1rem'}}>
                    <InputGroup size="sm" className="mb-1">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm"><BiMusic/></InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Adicionar Musica" />
                    </InputGroup>
                    </div>
                    <ButtonAddMusic>Adicionar na Playlist</ButtonAddMusic>
                    <PlayListMusicas>
                        <h4>PlayList</h4>
                        {playlist.musics.map(music => (
                            <Music><AiTwotoneDelete/><BsFillPlayFill/>{music.title}</Music>
                        ))}
                    </PlayListMusicas>
            </Content>
        </ContentPlaylist>
        <ButtonsNextMusic>
            <BsFillSkipStartFill onClick={BackMusic} style={{marginLeft:'10rem'}}/>
            <BsFillSkipEndFill onClick={NextMusic} style={{marginLeft:'1rem'}}/>
            <BsFillPlayFill style={{marginLeft:'1rem'}}/>
            <BsPause style={{marginLeft:'1rem'}}/>
            <ButtonFollow>
            <BiHeart style={{marginLeft:'1rem'}}/>
            
            </ButtonFollow>
            <BiShow style={{marginLeft:'1rem'}}></BiShow><h4>45445454</h4>
        </ButtonsNextMusic>
    </Container>
    );
}

export default PlayerSong;