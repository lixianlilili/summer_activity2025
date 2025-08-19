import matplotlib.pyplot as plt 
import numpy as np
import sklearn

data_num = 50
X = np.random.rand(data_num, 1)*10
Y = X*3+4+4*np.random.randn(data_num, 1)

N = X.shape[0]  # 返回数组第一维的大小

n_epoch = 500   # 迭代次数
a, b = 1, 1     # 参数初始值
epsilon = 0.001   #
for i in range(n_epoch):
    data_idx = list(range(N))
    np.random.shuffle(data_idx)
    for j in data_idx:
        a = a+epsilon*2*(Y[j]-a*X[j]-b)*X[j]
        b = b+epsilon*2*(Y[j]-a*X[j]-b)
    L = 0
    for j in range(N):
        L += ((Y[j]-a*X[j]*b)**2)
    if i % 100 == 0:
        print("%4d 代:loss = %f,a=%f,b=%f", i, L, a, b)
X_min=np.min(X)
X_max=np.max(X)
Y_min=np.min(Y)
Y_max=np.max(Y)
plt.scatter(X, Y)
plt.plot([X_min, X_max], [Y_min, Y_max], 'r', label='模型')
plt.legend()
plt.show()











