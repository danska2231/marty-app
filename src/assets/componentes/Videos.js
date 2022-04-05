import info from '../componentes/json/vide.json'

const Videos = () => {

    return(<div>
        {
            info.map(vid =>{
                return(<div key={vid.id}>
                            <iframe title='a' src={vid.url} frameborder="0" allow="autoplay" encrypted-media allowfullscreen className="video"/>
                        </div>
                    )
            })
        }

    </div>)

}

export default Videos;


