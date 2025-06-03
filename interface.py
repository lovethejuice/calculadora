import sys
from PyQt5.QtWidgets import QApplication, QWidget

# Criação da aplicação
app = QApplication(sys.argv)

# Criação da janela principal
janela = QWidget()
janela.setWindowTitle('calculadora')
janela.setGeometry(100, 100, 400, 600)  # (x, y, largura, altura)

# Exibir a janela
janela.show()

# Executar a aplicação
sys.exit(app.exec_())