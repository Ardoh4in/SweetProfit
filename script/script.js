/*=========================NOTIFICAÇÕES=========================*/

window.onload = function() {
    var sino = document.querySelector('.notification');
    var menu = document.querySelector('.notification-dropdown');
    var contador = document.querySelector('.notification-badge');
    
    sino.onclick = function(e) {
        e.stopPropagation();
        if(menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    }
    
    document.onclick = function() {
        menu.style.display = 'none';
    }
    
    function novaNotificacao(msg, quando) {
        var lista = document.querySelector('.notification-content');
        var vazio = document.querySelector('.empty-notifications');
        
        if(vazio) {
            lista.removeChild(vazio);
        }
        
        var item = document.createElement('div');
        item.className = 'notification-item';
        item.innerHTML = `
            <div class="notification-icon">
                <i class="fas fa-exclamation-circle"></i>
            </div>
            <div class="notification-text">
                <p>${msg}</p>
                <small>${quando}</small>
            </div>
        `;
        
        lista.insertBefore(item, lista.firstChild);
        
        var total = document.querySelectorAll('.notification-item').length;
        contador.textContent = total;
    }
}

/*=========================USUÁRIO=========================*/

window.onload = function() {
    var sinoNotificacao = document.querySelector('.notification');
    var menuNotificacoes = document.querySelector('.notification-dropdown');
    var contador = document.querySelector('.notification-badge');
    var perfil = document.querySelector('.perfil');
    var menuPerfil = document.querySelector('.perfil-menu');

    sinoNotificacao.onclick = function(e) {
        e.stopPropagation();
        menuNotificacoes.style.display = menuNotificacoes.style.display === 'block' ? 'none' : 'block';
        menuPerfil.style.display = 'none';
    }

    perfil.onclick = function(e) {
        e.stopPropagation();
        menuPerfil.style.display = menuPerfil.style.display === 'block' ? 'none' : 'block';
        menuNotificacoes.style.display = 'none';
    }

    document.onclick = function() {
        menuNotificacoes.style.display = 'none';
        menuPerfil.style.display = 'none';
    }

    function addNotificacao(mensagem, tempo) {
        var areaNotificacoes = document.querySelector('.notification-content');
        var avisoVazio = document.querySelector('.empty-notifications');
        
        if(avisoVazio) {
            areaNotificacoes.removeChild(avisoVazio);
        }
        
        var item = document.createElement('div');
        item.className = 'notification-item';
        item.innerHTML = `
            <div class="notification-icon">
                <i class="fas fa-exclamation-circle"></i>
            </div>
            <div class="notification-text">
                <p>${mensagem}</p>
                <small>${tempo}</small>
            </div>
        `;
        
        areaNotificacoes.insertBefore(item, areaNotificacoes.firstChild);
        contador.textContent = document.querySelectorAll('.notification-item').length;
    }
}

/*==========GRÁFICOS E PRODUTOS========== */
document.querySelectorAll('.periodo-botoes button').forEach(botao => {
    botao.addEventListener('click', function() {
        document.querySelectorAll('.periodo-botoes button').forEach(btn => {
            btn.classList.remove('periodo-ativo');
        });

        this.classList.add('periodo-ativo');

        console.log('Período selecionado:', this.textContent);
    });
});

document.querySelectorAll('.produto').forEach(produto => {
    produto.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(5px)';
    });
    
    produto.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});