import { useParams } from "react-router-dom";

function Feed() {
const { id } = useParams();

const dados = {pokemons, loading, error } = useFetchPokeapi(id);
};

const post = dados[id];

return (
<div>
<h2>{post.titulo}</h2>
<p>{post.conteudo}</p>
</div>
);
}

export default Feed;