Basic Structure of any Legacy Bitcoin Transaction
# {
# Version: (4 bytes, little endian),
# Input Count: (Compact Size),
# Input(s): [
#     {
#     TXID: (32 bytes, little endian)
#     VOUT: (4 bytes, little endian) (normally XX000000)
#     ScriptSig Size: (Compact Size)
#     ScriptSig: (unlocking script, big endian)
#     Sequence: (4 bytes) (normally ffffffff)
#     }
# ],
# Output Count: (Compact Size)
# Output(s):
#     Amount: (8 bytes, sats value, little endian) (normally ends with 00s)
#     ScriptPubKey Size: (Compact Size)
#     ScriptPubKey: (locking script, big endian)
# Locktime: (4 Bytes, little endian) (always the last 4 bytes)
# }