Produto.java
public class Produto {

    private Long id;
    private String descr;
    private Integer qtd;
    private Double valor;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getDescr() {
        return descr;
    }
    public void setDescr(String descr) {
        this.descr = descr;
    }
    public Integer getQtd(){
        return qtd;
    };
    public void setQtd(Integer qtd){
        this.qtd = qtd;
    };
    public Double getValor(){
        return valor
    };
    public void setValor(Double valor){
        this.valor = valor
    }; 
}


Venda.java
public class Venda {

    private Long id;
    private String nomeCliente;
    private List<Produto> produtos;

    public Long getId(){
        return id
    };
    public void setId(Long id){
        this.id = id
    };

    public String getNomeCliente(){
        return nomeCliente;
        }

    public void setNomeCliente(String nomeCliente){
        this.nomeCliente = nomeCliente
    };
    public List<Produto> getprodutos(){
        return produtos
    };
    public void setprodutos(List<Produto> produtos){
        this.produtos = produtos
    };
    
    public Double valorTotal() {
        double total = 0.0;
        for (Produto produto : produtos) {
            total += produto.valor;
        }
        return total;
    }
}

// O Encapsulamento serve para controlar o acesso aos atributos e métodos de uma classe. É uma forma eficiente de proteger os dados manipulados dentro da classe, além de determinar onde esta classe poderá ser manipulada. 